import json
import os
from slugify import slugify  # Import slugify function from python-slugify

# Specify the path to the outcomes.json file
json_file = './outcomes.json'

# Specify the output folder where new .md files will be created
output_folder = '.'

# Check if the output folder exists, if not, create it
if not os.path.exists(output_folder):
    os.makedirs(output_folder)

# Read the JSON file
with open(json_file, 'r') as file:
    data = json.load(file)

# Process each object in the JSON array
for outcome in data:
    # Extract the 'title' and 'description' values
    title_value = outcome.get('title', 'Untitled')
    description_value = outcome.get('description', '')

    # Create slugified filename using the 'title' value
    slugified_title = slugify(title_value)

    # Create front matter using the 'title' and 'description' values
    front_matter = f"---\ntitle: {title_value}\ndescription: {description_value}\n---\n\n"

    # Create a new .md file using the slugified 'title' value as the filename and save it in the output folder
    filename = f"{output_folder}/{slugified_title}.md"
    with open(filename, 'w') as outfile:
        outfile.write(front_matter)
    print(f"File created: {filename}")
