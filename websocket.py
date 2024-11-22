import asyncio
from datetime import date
from websockets.asyncio.server import serve
from websockets.exceptions import ConnectionClosedOK

async def echo(websocket):
    end = False

    async def msg_read():
        nonlocal end
        async for message in websocket:
            if message.strip() == "end":
                end = True
    
    async def time():
        while not end:
            try:
                today = date.today()
                await websocket.send(str(today))
                await asyncio.sleep(1)
            except ConnectionClosedOK:
                break
    
    await asyncio.gather(msg_read(), time())


async def main():
    async with serve(echo, "localhost", 8000) as server:
        print("WebSocket server running on port 8000")
        await server.serve_forever()

if __name__ == "__main__":
    try:
        asyncio.run(main())
    except KeyboardInterrupt:
        print("Gracefully shutting down")