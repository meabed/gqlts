#!/usr/bin/env bash

pkgVersion="3.2.10"
newVersion="3.2.11"
find . -type f \( -name '*.js' -or -name '*.ts' -or -name '*.tsx' -or -name '*.json' \) -not -path '*node_modules*' -not -path '*.next*' -exec grep -l "$pkgVersion" {} \; | xargs perl -pi -e "s/$pkgVersion/$newVersion/g"
