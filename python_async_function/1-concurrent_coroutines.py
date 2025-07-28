#!/usr/bin/env python3
"""Run multiple wait_random coroutines concurrently and return delays."""

import asyncio
from typing import List
wait_random = __import__('0-basic_async_syntax').wait_random

async def wait_n(n: int, max_delay: int) -> List[float]:
    """
    Spawn wait_random n times with max_delay, return list of delays
    in the order they finish (ascending).
    """
    # Crea las tareas concurrentes
    tasks = [asyncio.create_task(wait_random(max_delay)) for _ in range(n)]
    delays = []

    # Espera a que las tareas terminen y recoge resultados en orden de finalización
    for task in asyncio.as_completed(tasks):
        result = await task
        delays.append(result)

    return delays
