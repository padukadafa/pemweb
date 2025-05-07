from abc import ABC, abstractmethod

# Class parent untuk item di library
class LibraryItem(ABC):
    def __init__(self, item_id, title):
        self._item_id = item_id
        self._title = title
        self._available = True
    # Menampilkan info dari item
    @abstractmethod
    def display_info(self):
        pass
    @property
    def title(self):
        return self._title

    @property
    def item_id(self):
        return self._item_id

    def is_available(self):
        return self._available

    def borrow_item(self):
        if self._available:
            self._available = False
            return True
        return False

    def return_item(self):
        self._available = True
