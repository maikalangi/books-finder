// VARIABLES
const url = 'https://www.googleapis.com/books/v1/volumes?q=';
const key = '&key=AIzaSyCeRKMon4_VVEskljoG-PvfJOPbse5qIPY'

// ELEMENT REFERENCES

const $container = $('#container');
const $cover = $('img');
const $form = $('#searchForm');
const $button = $('#button');
const $input = $('#field');
const $section = $('#results');

// EVENT LISTENERS
$form.on('submit', handleGetData);

// FUNCTIONS
function handleGetData(event) {

    event.preventDefault();
    const userInput = $input.val();

    $.ajax(url + userInput + key + '&maxResults=40').then((data) => {
        
        const axs = data.items.map(more=>more.volumeInfo);
        const arr = [];

        $(axs).each(i=>{
            
            const $result = $('<img class="query">');
            
            $section.append
            ($result.attr('src', axs[i].imageLinks.thumbnail));
                
            $result.on('click', ()=>{
                const $showCover = $(document.createElement('img'));
                const $title = $(document.createElement('span'));
                const $author = $(document.createElement('span'));
                const $date = $(document.createElement('span'));
                const $summary = $(document.createElement('p'));
                const $show = $(document.createElement('div'));
                $show.addClass('show');
                $container.html($show);
                $show.html($showCover);
                $showCover.html($title);
                $title.html($author);
                $author.html($date);
                $date.html($summary);
                $showCover.append(
                    $showCover.attr(
                        'src', 
                        `${axs[i].imageLinks.thumbnail}`)
                ),
                $title.append(
                        $title.text((axs[i].title))
                ),
                $author.append(
                    $author.text(axs[i].authors)
                ),
                $date.append(
                    $date.text(axs[i].publishedDate)
                ),
                $summary.append(
                    $summary.text(axs[i].description)
                )
            })
        });
    },
    (error) => {
         console.log('bad request', error);
     });
};