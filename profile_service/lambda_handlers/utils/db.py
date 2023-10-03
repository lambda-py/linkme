import os

import boto3

dynamo_db = boto3.resource("dynamodb")
if "Local" in os.environ:
    dynamo_db = boto3.resource("dynamodb", endpoint_url="http://localhost:8000")

table = dynamo_db.Table("UserSocialProfile")
