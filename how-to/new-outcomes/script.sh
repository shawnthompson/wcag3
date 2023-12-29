#!/bin/bash

# Check if the folder path is provided
if [ $# -eq 0 ]; then
    echo "Please provide the folder path as an argument."
    exit 1
fi

# Check if the folder exists
if [ ! -d "$1" ]; then
    echo "Folder $1 not found."
    exit 1
fi

# Navigate to the folder
cd "$1"

# Loop through all .md files in the folder
for file in *.md; do
    if [ -f "$file" ]; then
        # Add a return before and after 'tags: outcome' and '---'
        sed -i '' '/^tags: outcome/{N;s/\(tags: outcome\)\(.*\)\(---\)/\1\n\3/}' "$file"
        echo "Return added before and after 'tags: outcome' in $file"
    fi
done

echo "Operation completed."
