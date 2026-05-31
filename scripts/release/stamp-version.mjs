#!/usr/bin/env bun
import { logStep, stampPackageVersions, syncPackageDocs, validateVersion } from './lib.mjs';

const version = validateVersion(process.argv[2]);

logStep(`Stamping package manifests to ${version}`);
stampPackageVersions(version);

logStep('Syncing package README and LICENSE files');
syncPackageDocs();
