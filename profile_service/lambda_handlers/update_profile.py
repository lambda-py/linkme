import json

from . import get_logger, get_table
from .schemas.user_social_profile import UserSocialProfile

table = get_table()
logger = get_logger()


def handler(event, context):
    logger.info("Received event: %s", json.dumps(event))
    user_id = event.get("pathParameters", {}).get("user_id")
    if not user_id:
        return {"statusCode": 400, "body": "Missing user_id"}

    try:
        body = json.loads(event.get("body", "{}"))
    except Exception as e:
        logger.info("Failed to parse request body: %s", str(e))
        return {"statusCode": 400, "body": str(e)}

    # Validate and parse the request body
    try:
        profile = UserSocialProfile.model_validate(body)
    except ValueError as e:
        logger.error("Invalid request body: %s", str(e))
        return {"statusCode": 400, "body": str(e)}

    # Update the profile in DynamoDB
    try:
        response = table.update_item(
            Key={"_id": user_id},
            UpdateExpression="SET #name = :name, description = :description, image_url = :image_url, social_links = :social_links",
            ExpressionAttributeNames={"#name": "name"},
            ExpressionAttributeValues={
                ":name": profile.name,
                ":description": profile.description,
                ":image_url": profile.image_url,
                ":social_links": profile.social_links,
            },
            ReturnValues="UPDATED_NEW",
        )
    except Exception as e:
        logger.error("Failed to update profile in DynamoDB: %s", str(e))
        return {"statusCode": 500, "body": str(e)}

    return {"statusCode": 200, "body": response["Attributes"]}
