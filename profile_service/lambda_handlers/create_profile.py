import json

from .schemas.user_social_profile import UserSocialProfile
from .utils.db import table


def handler(event, context):
    body = json.loads(event.get("body", "{}"))

    # Validate and parse the request body
    try:
        profile = UserSocialProfile.model_validate(body)
    except ValueError as e:
        return {"statusCode": 400, "body": str(e)}

    # Save the profile to DynamoDB
    try:
        table.put_item(Item=profile.model_dump(by_alias=True))
    except Exception as e:
        return {"statusCode": 500, "body": str(e)}

    return {"statusCode": 200, "body": "Profile created successfully"}
