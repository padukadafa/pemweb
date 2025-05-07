from library_item import LibraryItem

# Class untuk DVD, turunan dari LibraryItem
class DVD(LibraryItem):
    def __init__(self, item_id, title, duration):
        super().__init__(item_id, title)
        self._duration = duration  # dalam menit

    def display_info(self):
        status = "Available" if self.is_available() else "Not Available"
        print(f"[DVD] ID: {self.item_id}, Title: {self.title}, Duration: {self._duration} mins, Status: {status}")
