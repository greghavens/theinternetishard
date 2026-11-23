---
title: Relay 2.0 cutover
product: Relay
release: "2.0"
revision: r1
---
# Relay 2.0 cutover

## Before cutover

Before routing traffic to the Relay 2.0 worker, the preview-read check in the [preflight runbook](./preflight.md#preview-read) must pass. A preview-read failure blocks cutover. Consult the [worker queue protocol compatibility note](./compatibility.md#worker-queue-protocols) before using protocol 1.8 jobs for the check.
