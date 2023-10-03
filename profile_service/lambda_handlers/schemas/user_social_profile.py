from pydantic import BaseModel, Field, HttpUrl


class SocialLink(BaseModel):
    name: str = Field(description="Name of the social link")
    url: HttpUrl = Field(description="URL of the social link")


class UserSocialProfile(BaseModel):
    user_id: str = Field(alias="_id", description="User ID")
    name: str = Field(description="Name of the user")
    description: str = Field(description="Description of the user", default="")
    image_url: HttpUrl = Field(description="Image URL of the user", default="")
    social_links: list[SocialLink]
