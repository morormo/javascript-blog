{

  'use strict';

  const titleClickHandler = function(event){
  const clickedElement = this;
 
  

  /* [DONE] remove class 'active' from all article links  */

  const activeLinks = document.querySelectorAll('.titles a.active');

  for(let activeLink of activeLinks){
    activeLink.classList.remove('active');
  }

  /* [IN PROGRESS] add class 'active' to the clicked link */

  clickedElement.classList.add('active');

  /* [DONE] remove class 'active' from all articles */
  const activeArticles = document.querySelectorAll('.post');

  for(let activeArticle of activeArticles){
    activeArticle.classList.remove('active');
  }

  /* [DONE] get 'href' attribute from the clicked link */
  event.preventDefault();

  /* find the correct article using the selector (value of 'href' attribute) */
  const articleSelector = clickedElement.getAttribute("href");
  const targetArticle = document.querySelector(articleSelector);

  /* add class 'active' to the correct article */
  targetArticle.classList.add('active');
}

const links = document.querySelectorAll('.titles a');

for(let link of links){
  link.addEventListener('click', titleClickHandler);
}

const optArticleSelector = '.post',
  optTitleSelector = '.post-title',
  optTitleListSelector = '.titles';
  optArticleTagsSelector = '.post-tags .list'

function generateTitleLinks(){

	  /* remove contents of titleList */
	const titleList = document.querySelector(optTitleListSelector);

	  /* for each article */
	 const articles = document.querySelectorAll(optArticleSelector);
	 let html = '';

	 for(let article of articles){
	 	
		    /* get the article id */
		 const articleId = article.getAttribute("id");

		 
		    /* find the title element */
		 const articleTitle = article.querySelector(optTitleSelector).innerHTML;

		    /* get the title from the title element */

		    /* create HTML of the link */
		 const linkHTML = '<li><a href="#' + articleId + '"<span>' + articleTitle + '</span></a></li>';
		    /* insert link into titleList */
		html = html + linkHTML;
		 
	 }
	 titleList.innerHTML = html;
	 const links = document.querySelectorAll('.titles a');

    for (let link of links) {

      link.addEventListener('click', titleClickHandler);
    }
 }

generateTitleLinks();

function generateTags(){


  /* find all articles */
  const articles = document.querySelectorAll(optArticleSelector);

  /* START LOOP: for every article: */
  for(let article of articles){
    /* find tags wrapper */
    const tagList = article.querySelector(optArticleTagsSelector);
    /* make html variable with empty string */
    let html = '';
    /* get tags from data-tags attribute */
    const articleTags = article.getAttribute('data-tags');
    
    /* split tags into array */
    const articleTagsArray = articleTags.split(' ');
    
    /* START LOOP: for each tag */
    for(let tag of articleTagsArray){
      /* generate HTML of the link */
      const linkHTML = '<li><a href="#tag-' + tag + '"<span>' + tag + '</span></a></li> ';
      /* add generated code to html variable */
      html= html+linkHTML;
      console.log (html);
    /* END LOOP: for each tag */
    }
    /* insert HTML of all the links into the tags wrapper */
    tagList.innerHTML = html;
  /* END LOOP: for every article: */
}
}

generateTags();
}


