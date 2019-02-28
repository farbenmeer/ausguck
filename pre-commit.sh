#!/usr/bin/env bash

set -e

readonly README="README.md"

readonly DECKS=$(find . -type f -name '*.mdx' | sed 's/\.\/.*\/\(.*\)\.mdx$/\1/g' | sort)

function remove_lines_between() {
    readonly local first="$1"
    readonly local last="$2"

    # Delete last code block
    sed -i.tmp "$first,$last d" "$README"
    rm "$README".tmp
}

function write_decks() {
    readonly local DECKS_TO_WRITE="$1"

    # Write new code block with decks to $README
    {
        # shellcheck disable=SC2016
        echo '```sh'
        echo "$DECKS_TO_WRITE"

        # shellcheck disable=SC2016
        echo '```'
    } >> "$README"

    # Add new lines in front of every ` yarn`
    sed -i.tmp 's/ yarn/\nyarn/g' "$README"
    rm "$README".tmp
}

# add the currently available decks to $README
function modify_readme() {
    # All currently available decks
    readonly local ALL_DECKS=$(echo "$DECKS" | sed 's/^/yarn start /' | sort)

    # Lines which holds the last code block
    # shellcheck disable=SC2016
    readonly local LAST_LINES=$(grep -n '```' "$README" | tail -n 2 | sed 's/:.*//')

    # First line of the last code block
    readonly local FIRST_LAST_LINE=$(echo "$LAST_LINES" | head -n 1)

    # Last line of the last code block
    readonly local LAST_LAST_LINE=$(echo "$LAST_LINES" | tail -n 1)

    remove_lines_between "$FIRST_LAST_LINE" "$LAST_LAST_LINE"

    write_decks "$ALL_DECKS"
}

function git_add() {
    git add $README
}

function main() {
    modify_readme
    git_add
}

main
