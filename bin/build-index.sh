#!/usr/bin/env bash

set -e

readonly DECK_NAMES=$(find ./decks -type f -name '*.mdx' | sed 's/\.\/.*\/\(.*\)\.mdx$/\1/g' | sort)

function create_index() {
    {
        printf "# All decks from farbenmeer \n\n"
        for deck in $DECK_NAMES; do
          if [[ "$deck" == "sample" ]]; then
              continue
          fi
          printf "* [%s](%s)\n" "$deck" "$deck"
          done

          printf "\n\n[farbenmeer.de](https://www.farbenmeer.de)"

    } >> src/pages/index.mdx
}

rm -f src/pages/index.mdx

create_index
