#!/usr/bin/env python3
from typing import Union, Tuple


def to_kv(k: str, v: Union[int, float]) -> Tuple[str, float]:
    """Return a tuple where the first element is k (str) and
    the second element is the square of v (float)."""
    return (k, float(v ** 2))
