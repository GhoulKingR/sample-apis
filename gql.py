import strawberry

from fastapi import FastAPI
from strawberry.fastapi import GraphQLRouter

text = "Hello, world"

@strawberry.type
class Query:
    @strawberry.field
    def hello(self) -> str:
        return text
    
@strawberry.type
class Mutation:
    @strawberry.mutation
    def changeMessage(self, message: str) -> str:
        global text
        text = message
        return text

schema = strawberry.Schema(Query)
graphql_app = GraphQLRouter(schema)

app = FastAPI()
app.include_router(graphql_app, prefix="/graphql")