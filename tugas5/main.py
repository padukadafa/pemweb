from library import Library
from book import Book
from magazine import Magazine
from dvd import DVD

def main():
    lib = Library()

    b1 = Book("B001", "Python Programming", "John Doe")
    m1 = Magazine("M101", "Tech Weekly", 34)
    d1 = DVD("D505", "Inception", 148)

    lib.add_item(b1)
    lib.add_item(m1)
    lib.add_item(d1)

    lib.display_all_items()

    lib.search_by_title("python")
    lib.search_by_id("D505")

if __name__ == "__main__":
    main()
