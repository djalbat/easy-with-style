#!/bin/bash

directories=( ../yapp
              ../occam-styles
              ../easy
              ../reaction
              ../easy-with-style
              ../concurrent-server
              ../occam-semver
              ../necessary
              ../highmark-markdown
              ../juxtapose
              ../occam-preview
              ../occam-pretty
              ../occam-file-system
              ../occam-documents
              ../easy-layout
              ../reaction-hooks
              ../occam-client
              ../occam-verify-cli
              ../xgl
              ../easy-file-system
              ../occam-browser
              ../occam-editor
              ../occam-custom-grammars
              ../easy-navigation
              ../concurrent-client
              ../highmark-yapp
              ../occam-desktop
              ../sufficient
              ../occam-grammars
              ../occam-directed-graphs
              ../occam-lexers
              ../easy-mobile
              ../occam-incremental
              ../inference
              ../highmark-cli
              ../highmark-fonts
              ../reaction-with-style
              ../easy-drag-and-drop
              ../occam-entities
              ../occam-parsers
              ../easy-richtextarea
              ../occam-grammar-utilities
              ../with-style
              ../occam-query
              ../fragmented )

for index in "${!directories[@]}"
do
  directory=${directories[$index]}

  cd $directory
  npm install -D @swc/core@latest
  npm --no-git-tag-version version patch
  git add . --all
  git commit -m "Unpinned the SWC dependency."
  git push
  npm publish
done
