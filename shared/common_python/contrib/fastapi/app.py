from fastapi import FastAPI


class SharedFastAPI(FastAPI):
    """
    A FastAPI application that can be used by multiple services.

    This is useful for sharing common FastAPI functionality across multiple
    services. For example, if you want to share a common health check endpoint
    across multiple services, you can do so by creating a SharedFastAPI
    instance and then adding the health check endpoint to it.
    """

    ...
