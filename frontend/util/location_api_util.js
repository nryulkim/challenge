export const locations = (text, coords, success) => {
  $.ajax({
    method: "GET",
    url: `api/locations/1?text=${text}&latitude=${coords[0]}&longitude=${coords[1]}`,
    dataType: "json",
    success
  });
};

export const createLocation = (data, user, success) => {
  $.ajax({
    method: "POST",
    url: `api/locations`,
    dataType: "json",
    data: { info: data, user: user },
    success
  });
};

export const updateLocation = (data, user, success) => {
  $.ajax({
    method: "PATCH",
    url: `api/locations/${data.id}`,
    dataType: "json",
    data: { info: data, user: user },
    success
  });
};
