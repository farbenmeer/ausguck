#!/usr/bin/env bash

set -e

readonly FILE="README.md"

function remove_lines_between() {
    readonly local first="$1"
    readonly local last="$2"

    # Delete last code block
    sed -i.tmp "$first,$last d" "$FILE"
    rm "$FILE".tmp
}

function write_decks() {
    readonly local DECKS="$1"

    # Write new code block with decks to $FILE
    {
        # shellcheck disable=SC2016
        echo '```sh'
        echo "$DECKS"

        # shellcheck disable=SC2016
        echo '```'
    } >> "$FILE"

    # Add new lines in front of every ` yarn`
    sed -i.tmp 's/ yarn/\nyarn/g' "$FILE"
    rm "$FILE".tmp
}

# add the currently available decks to $FILE
function modify_readme() {
    # All currently available decks
    readonly local ALL_DECKS=$(find . -type f -name '*.mdx' | sed 's/\.\/.*\/\(.*\)\.mdx$/yarn start \1/g' | sort)

    # Lines which holds the last code block
    # shellcheck disable=SC2016
    readonly local LAST_LINES=$(grep -n '```' "$FILE" | tail -n 2 | sed 's/:.*//')

    # First line of the last code block
    readonly local FIRST_LAST_LINE=$(echo "$LAST_LINES" | head -n 1)

    # Last line of the last code block
    readonly local LAST_LAST_LINE=$(echo "$LAST_LINES" | tail -n 1)

    remove_lines_between "$FIRST_LAST_LINE" "$LAST_LAST_LINE"

    write_decks "$ALL_DECKS"
}

function git_add() {
    git add "$FILE"
}

function main() {
    modify_readme
    git_add
}

main
