from library_item import LibraryItem


# Class untuk Book, turunan dari LibraryItem
class Book(LibraryItem):
    def __init__(self, item_id, title, author):
        super().__init__(item_id, title)
        self.__author = author  # private

    @property
    def author(self):
        return self.__author

    def display_info(self):
        status = "Available" if self.is_available() else "Not Available"
        print(f"[Book] ID: {self.item_id}, Title: {self.title}, Author: {self.author}, Status: {status}")
