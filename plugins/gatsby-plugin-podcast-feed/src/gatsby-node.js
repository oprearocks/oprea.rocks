import path from 'path'
import Podcast from 'podcast'
import { defaultOptions, runQuery, writeFile } from './internals'

const PUBLIC_PATH = `./public`

exports.onPostBuild = async ({ graphql, pathPrefix }, pluginOptions) => {
  const options = { ...pluginOptions }
  delete options.plugins
  delete options.createLinkInHead

  const { query, serialize, output, ...rest } = {
    ...defaultOptions,
    ...options,
  }

  const feed = new Podcast(rest);
  const outputFilePath = path.join(PUBLIC_PATH, output)


  const queryRecords = await runQuery(
    graphql,
    query,
  )

  serialize(queryRecords).forEach(u => feed.addItem(u))
  const xml = feed.buildXml();
  return await writeFile(outputFilePath, xml)
}
