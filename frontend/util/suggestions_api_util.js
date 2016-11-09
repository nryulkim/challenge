export const suggestions = (text, coords, success) => {
  $.ajax({
    method: "GET",
    url: `api/suggestions?text=${text}&latitude=${coords[0]}&longitude=${coords[1]}`,
    dataType: "json",
    success
  });
};
