import os

css_dir = "c:/Users/atulc/Downloads/Aqua-Nova/css"
os.makedirs(css_dir, exist_ok=True)
css_path = css_dir + "/style.css"

with open(css_path, "w", encoding="utf-8") as f:
    f.write("@charset UTF-8;\n\n")

print("CSS file initialized")
