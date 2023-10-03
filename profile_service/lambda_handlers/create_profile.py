import json

from . import get_logger, get_table
from .schemas.user_social_profile import UserSocialProfile

table = get_table()
logger = get_logger()


def handler(event, context):
    logger.info("Received event: %s", json.dumps(event))
    body = json.loads(event.get("body", "{}"))

    # Validate and parse the request body
    try:
        profile = UserSocialProfile.model_validate(body)
    except ValueError as e:
        logger.error("Invalid request body: %s", str(e))
        return {"statusCode": 400, "body": str(e)}

    # Save the profile to DynamoDB
    try:
        table.put_item(Item=profile.model_dump(by_alias=True))
    except Exception as e:
        logger.error("Failed to save profile to DynamoDB: %s", str(e))
        return {"statusCode": 500, "body": str(e)}

    return {"statusCode": 200, "body": "Profile created successfully"}
