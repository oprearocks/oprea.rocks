###
# Page options, layouts, aliases and proxies
###

# Per-page layout changes:
#
# With no layout
page '/*.xml', layout: false
page '/*.json', layout: false
page '/*.txt', layout: false

# With alternative layout
# page "/path/to/file.html", layout: :otherlayout

# Proxy pages (http://middlemanapp.com/basics/dynamic-pages/)
# proxy "/this-page-has-no-template.html", "/template-file.html", locals: {
#  which_fake_page: "Rendering a fake page with a local variable" }

# General configuration

# Reload the browser automatically whenever files change
configure :development do
  activate :livereload
end
activate :directory_indexes
activate :autoprefixer
activate :syntax
set :markdown_engine, :kramdown
set :markdown, :input => "GFM",
               :hard_wrap => false


activate :blog do |blog|
  Time.zone = "Bucharest"
  # This will add a prefix to all links, template references and source paths
  # blog.prefix = "blog"

  blog.sources = "posts/{year}-{month}-{day}-{title}.html"
  blog.permalink = "blog/{title}.html"
  # Matcher for blog source files
  blog.taglink = "blog/{tag}.html"
  blog.layout = "article"
  # blog.summary_separator = /(READMORE)/
  # blog.summary_length = 250
  blog.year_link = "blog/{year}.html"
  blog.month_link = "blog/{year}/{month}.html"
  blog.day_link = "blog/{year}/{month}/{day}.html"
  blog.default_extension = ".md"

  blog.tag_template = "tag.html"
  blog.calendar_template = "calendar.html"

  # Enable pagination
  blog.paginate = true
  blog.per_page = 10
  blog.page_link = "page/{num}"
end

###
# Helpers
###

# Methods defined in the helpers block are available in templates
helpers do
  def is_page_active(slug)
    active_class = ''
    current_page_url = current_page.url

    if current_page_url == slug || (current_page_url.include?(slug) && slug != '/')
      active_class = 'c-main-menu-item--active'
    end

    active_class
  end

  def date_to_string(date)
    date.strftime('%B %d, %Y')
  end

  def gist(account, gist_hash)
    '<script src="https://gist.github.com/' + account + '/' + gist_hash + '.js"></script>'
  end
end

# Build-specific configuration
configure :build do

  # Minify CSS on build
  activate :minify_css

  # Minify Javascript on build
  activate :minify_javascript
end
