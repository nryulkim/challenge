export const locations = (text, coords, success) => {
  $.ajax({
    method: "GET",
    url: `api/locations?text=${text}&latitude=${coords[0]}&longitude=${coords[1]}`,
    dataType: "json",
    success
  });
};
