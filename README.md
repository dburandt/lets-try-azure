# lets-try-azure


## Deploying to Azure App Service Log
1. Created azure app in portal.azure.com (free tier)
2. Followed this guide: https://docs.microsoft.com/en-us/azure/javascript/tutorial-vscode-azure-cli-node-01
  - install azure cli via `brew install azure-cli`
  - login to cli via `az login`
  - create mini express app and add node `12.x.x` to engines
  - tried setting az user with my microsoft credentials, that failed
  - ran: `az configure --defaults group=lets-try-azure location=eastus` to match resource group that i set up through the portal
  - set user via: `az webapp deployment user set --user-name <> --password <>`
  - then ran: `az webapp deployment source config-local-git --name lets-try-azure`
  - then: `git remote add azure https://azuretryer@lets-try-azure.scm.azurewebsites.net/lets-try-azure.git`
  - then `git push azure master` and enter in user password
3. Profit! App live at `https://lets-try-azure.azurewebsites.net/`

## Deploying via github action CI/CD
1. Following first option here: https://github.com/Azure/webapps-deploy
2. 