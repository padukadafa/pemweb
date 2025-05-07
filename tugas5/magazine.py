from library_item import LibraryItem

# Class untuk Magazine, turunan dari LibraryItem
class Magazine(LibraryItem):
    def __init__(self, item_id, title, issue_number):
        super().__init__(item_id, title)
        self._issue_number = issue_number

    def display_info(self):
        status = "Available" if self.is_available() else "Not Available"
        print(f"[Magazine] ID: {self.item_id}, Title: {self.title}, Issue: {self._issue_number}, Status: {status}")
