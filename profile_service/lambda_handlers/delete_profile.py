from .utils.db import table


def handler(event, context):
    user_id = event.get("pathParameters", {}).get("user_id")
    if not user_id:
        return {"statusCode": 400, "body": "Missing user_id"}

    try:
        table.delete_item(Key={"_id": user_id})
    except Exception as e:
        return {"statusCode": 500, "body": str(e)}

    return {"statusCode": 200, "body": "Profile deleted successfully"}
