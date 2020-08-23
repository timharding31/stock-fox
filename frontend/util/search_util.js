export const stockSearch = search => (
  $.ajax({
    url: 'api/stocks',
    data: { search }
  })
);