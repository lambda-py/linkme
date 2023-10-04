import json

from utils.db import table
from utils.logger import logger


def handler(event, context):
    logger.info("ASDASDASDADSD")
    logger.info("Received event: %s", json.dumps(event))
    user_id = event.get("pathParameters", {}).get("user_id")
    if not user_id:
        return {"statusCode": 400, "body": "Missing user_id"}

    try:
        response = table.get_item(Key={"_id": user_id})
    except Exception as e:
        logger.error("Failed to get profile from DynamoDB: %s", str(e))
        return {"statusCode": 500, "body": str(e)}

    if "Item" in response:
        return {"statusCode": 200, "body": response["Item"]}

    logger.error("Profile not found")
    return {"statusCode": 404, "body": "Profile not found"}
