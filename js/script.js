// VARIABLES
const url = 'https://www.googleapis.com/books/v1/volumes?q=';
const key = '&key=AIzaSyCeRKMon4_VVEskljoG-PvfJOPbse5qIPY'

// ELEMENT REFERENCES
const $showCover = $('#selectedCover');
const $title = $('#title');
const $author = $('#author');
const $date = $('#date');
const $summary = $('#summary');
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

            $section.prepend
            ($result.attr('src', axs[i].imageLinks.thumbnail));
                
            $result.on('click', ()=>{
                // while (axs[i].hasOwnProperty() !== null) {      
                    $showCover.attr('src', `${axs[i].imageLinks.thumbnail}`);
                    $title.text((axs[i].title));
                    $author.text(axs[i].authors);
                    $date.text(axs[i].publishedDate);
                    $summary.text(axs[i].description);
                // }
            })
        });
    },
    (error) => {
         console.log('bad request', error);
     });
};