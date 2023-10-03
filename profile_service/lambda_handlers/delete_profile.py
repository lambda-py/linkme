import json

from . import get_logger, get_table

table = get_table()
logger = get_logger()


def handler(event, context):
    logger.info("Received event: %s", json.dumps(event))
    user_id = event.get("pathParameters", {}).get("user_id")
    if not user_id:
        return {"statusCode": 400, "body": "Missing user_id"}

    try:
        table.delete_item(Key={"_id": user_id})
    except Exception as e:
        logger.error("Failed to delete profile from DynamoDB: %s", str(e))
        return {"statusCode": 500, "body": str(e)}

    return {"statusCode": 200, "body": "Profile deleted successfully"}
