xml.instruct!
xml.feed "xmlns" => "http://www.w3.org/2005/Atom" do
  site_url = "https://oprea.rocks"
  blog_prefix = "blog"
  xml.title "Oprea.Rocks"
  xml.icon URI.join(site_url, data.global.logo_path)
  xml.subtitle "Docker, JavaScript, NodeJS"
  xml.id site_url
  xml.link "href" => URI.join(site_url, blog_prefix)
  xml.link "rel" => "self", "href" => URI.join(site_url, current_page.path)
  xml.link "rel" => "alternate", "href" => URI.join(site_url, "full.xml")
  xml.updated(blog.articles.first.date.to_time.iso8601) unless blog.articles.empty?
  xml.author { xml.name "Adrian Oprea" }

  blog.articles[0..5].each do |article|
    xml.entry do
      xml.title article.title
      xml.link "rel" => "alternate", "href" => URI.join(site_url, article.url)
      xml.id URI.join(site_url, article.url)
      xml.published article.date.to_time.iso8601
      xml.updated File.mtime(article.source_file).iso8601
      xml.author { xml.name "Adrian Oprea" }
      xml.content "<p><img src=\"#{URI.join(site_url, article.metadata[:page][:image])}\" alt=\"Featured article image\"></p>", article.summary, "<p><a href=\"#{URI.join(site_url, article.url).to_s}\" title=\"Continue reading\">Continue reading</a></p>", "type" => "html"
      # xml.content article.body, "type" => "html"
    end
  end
end
