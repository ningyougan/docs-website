import axios from 'axios';
import { useMainStore } from '@/store/index';

export async function getMd(link) {
  let gitApi;
  // http://gitlab.spdb.com/api/v4/projects/23323/repository/files/documents%2Fmarkdown%2Fcli%2Fvue%2FREADME.md/raw?ref=release
  let tagetMarkdown = '';
  if (link.endsWith('/')) {
    tagetMarkdown = link + 'README.md';
  } else if (!link.toUpperCase().endsWith('.MD')) {
    tagetMarkdown += link + '.md';
    console.log('🚀 ~ getMd ~ tagetMarkdown:', tagetMarkdown);
  }
  gitApi = `http://gitlab.spdb.com/api/v4/projects/23323/repository/files/${encodeURIComponent(
    'documents/markdown'
  )}${encodeURIComponent(`${tagetMarkdown}`)}/raw?ref=release`;

  return await axios.get(gitApi, {
    headers: { 'PRIVATE-TOKEN': 'dfx_phWpsZixxNMzE6tW' },
  });
}

export async function getSideBar(link) {
  const mainStore = useMainStore().clickedLink;
  let gitApi = `http://gitlab.spdb.com/api/v4/projects/23323/repository/files/${encodeURIComponent(
    `documents/markdown${link}config.json`
  )}/raw?ref=release`;
  return await axios.get(gitApi, {
    headers: { 'PRIVATE-TOKEN': 'dfx_phWpsZixxNMzE6tW' },
  });
}
