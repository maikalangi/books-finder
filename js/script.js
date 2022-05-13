// variables
const url = 'https://www.googleapis.com/books/v1/volumes?q=';
const key = '&key=AIzaSyCeRKMon4_VVEskljoG-PvfJOPbse5qIPY'

// element references
const $cover = $('img');
const $title = $('#title');
const $author = $('#author');
const $date = $('#date');
const $summary = $('#summary');
const $form = $('form');
const $input = $('input[type="text"]');
const $section = $('#results');

// event listeners
$form.on('submit', handleGetData);

// functions
function handleGetData(event) {

    event.preventDefault();
    const userInput = $input.val();

    $.ajax(url + userInput + key + '&maxResults=40').then((data) => {
        const axs = data.items.map(more=>more.volumeInfo);
        // console.log(axs);
        const arr = [];
        
        $(axs).each(i=>{
            // console.log(axs[i]);
            const $result = $('<img>');
            // const $wrap = $(`<a href='${axs[i]}'>`);

            // $section.append
            // ($wrap.attr('href', axs[i]))

            // $result.wrap($wrap);
            $section.append
            ($result.attr('src', axs[i].imageLinks.thumbnail));
                $result.on('click', ()=>{
                    console.log(axs[i]);
                    $title.text(axs[i].title);
                    $author.text(axs[i].authors);
                    $date.text(axs[i].publishedDate);
                    $summary.text(axs[i].description);
                    $('img').attribute('src', `${axs[i].imageLinks.thumbnail}`);
                    }
                )
            }
        );
    },
    (error) => {
         console.log('bad request', error);
     });
};

// $title.text('');
// $author.text('');
// $date.text('');
// $summary.text('');
// $cover.attribute(src=`${axs[i].imageLinks.thumbnail}`);