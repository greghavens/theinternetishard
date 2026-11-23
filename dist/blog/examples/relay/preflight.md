---
title: Relay preflight runbook
product: Relay
release: "2.0"
revision: r1
---
# Relay preflight runbook

## Preview read

Run the Relay 2.0 worker against a disposable queue with known protocol 1.8 fixtures. The preview-read check passes if the worker decodes every fixture and emits no schema errors. Record the worker build, protocol, and observed output. Passing this test does not establish whether a production queue is ready.
