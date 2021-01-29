'use strict'
const GithubApi = require('./utils/githubApi');
const nunjucks = require('nunjucks');
const fs = require('fs');
const path = require('path');
const moment = require('moment');

module.exports = async function(){
    const hexo = this;
    const { owner, repo, labels } = hexo.config.issue2readme;
    const githubApi = new GithubApi({
        owner,
        repo,
        auth: process.env.GITHUB_TOKEN,
    });
    githubApi.init();
    console.log('fetching issues, please wait...');
    const allIssues = await githubApi.fetchAllIssues() || [];
    console.log(`fetched ${allIssues.length} issues`);
    const labelsData = labels.map(item => ({title: item, list: allIssues.filter(issue => issue.labels.some(label => label.name === item))}));
    const tmpl = nunjucks.render(path.join(hexo.base_dir, 'readme.njk'), {labels: labelsData, moment});
    console.log('begin building readme file');
    fs.writeFileSync(path.join(hexo.base_dir, 'README.md'), tmpl);
    console.log('successed build readme file');
}