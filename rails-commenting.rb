# ASSESSMENT 6: Rails Commenting Challenge

# Add comments to the Rails Blog Post Challenge
# Explain the purpose and functionality of the code directly below the 10 comment tags


# FILE: app/controller/blog_posts_controller.rb

# 1) Defining the the current ruby controller class and inheriting methods from the parent controller.
class BlogPostsController < ApplicationController
  def index
    # 2)An instance object that is equal to every single blogpost. 
    @posts = BlogPost.all
  end

  def show
    # 3)An instance variable that is equal to the blog post you want with the same Id number you pass.
    @post = BlogPost.find(params[:id])
  end

  # 4)Creating a method called new that can create a new model instance.
  def new
    @post = Post.new
  end

  def create
    # 5)An instance variable that will create a new blog post and has blog_post_params passed into it as an argument, meaning that whenever a new blogpost is made, it needs to have whatever paramters blog_post_params has.
    @post = BlogPost.create(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    else
      redirect_to new_blog_post_path
    end
  end

  def edit
    @post = BlogPost.find(params[:id])
  end

  def update
    @post = BlogPost.find(params[:id])
    # 6)When calling on the update method, you will pass in new parameters according to the blog_post_params argument that will eventurally replace the current parameters. 
    @post.update(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    else
      redirect_to edit_blog_post_path
    end
  end

  def destroy
    @post = BlogPost.find(params[:id])
    if @post.destroy
      redirect_to blog_posts_path
    else
      # 7)This line of code redirects you to the blog posts path (which is a rails generated route) with whatever the post instance variable is.
      redirect_to blog_post_path(@post)
    end
  end

  # 8)keyword to create a strong param method.
  private
  def blog_post_params
    # 9)This line of code makes it so that the parameters require a blog_post object and will only take in a title and content.
    params.require(:blog_post).permit(:title, :content)
  end

end


# FILE: app/models/blog_post.rb

class BlogPost < ApplicationRecord
  # 10)An active record association that specifies the relationship between the blog post class and the comments class. Allows one blog post to have multiple comments.
  has_many :comments
end
