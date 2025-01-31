import sys
import webbrowser

def read_image(image_path):
    try:
        # Use webbrowser to open the image
        webbrowser.open(image_path)
        print(f"Image {image_path} opened successfully.")
    except Exception as e:
        print(f"Cannot open image {image_path}: {e}")

if __name__ == "__main__":
    if len(sys.argv) != 2:
        print("Usage: python3 read_image.py <image_path>")
    else:
        image_path = sys.argv[1]
        read_image(image_path)
