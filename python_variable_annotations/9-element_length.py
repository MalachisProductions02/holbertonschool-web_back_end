#!/usr/bin/env python3
"""Module with element_length function
that returns tuples of elements and their lengths."""

from typing import Iterable, Sequence, List, Tuple


def element_length(lst: Iterable[Sequence]) -> List[Tuple[Sequence, int]]:
    """Return a list of tuples with element and its length."""
    return [(i, len(i)) for i in lst]
