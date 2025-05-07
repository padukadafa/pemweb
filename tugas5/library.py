# class untuk menampung fungsi fungsi transaksi di perpusatakaan
class Library:
    def __init__(self):
        self.__items = []  # private attribute

    def add_item(self, item):
        self.__items.append(item)

    def display_all_items(self):
        print("\nLibrary Collection:")
        for item in self.__items:
            item.display_info()

    def search_by_title(self, title):
        results = [item for item in self.__items if title.lower() in item.title.lower()]
        print(f"\nSearch Results for '{title}':")
        for item in results:
            item.display_info()
        if not results:
            print("No items found.")

    def search_by_id(self, item_id):
        for item in self.__items:
            if item.item_id == item_id:
                print(f"\nItem found with ID '{item_id}':")
                item.display_info()
                return
        print(f"No item found with ID '{item_id}'.")
