export const locations = (text, coords, success) => {
  $.ajax({
    method: "GET",
    url: `api/locations/1?text=${text}&latitude=${coords[0]}&longitude=${coords[1]}`,
    dataType: "json",
    success
  });
};

export const myLocations = (id, success) => {
  $.ajax({
    method: "GET",
    url: `api/locations/?user_id=${id}`,
    dataType: "json",
    success
  });
};

export const createLocation = (data, user) => {
  $.ajax({
    method: "POST",
    url: `api/locations`,
    dataType: "json",
    data: { info: data, user: user }
  });
};

export const updateLocation = (data, user) => {
  $.ajax({
    method: "PATCH",
    url: `api/locations/${data.id}`,
    dataType: "json",
    data: { info: data, user: user }
  });
};

export const unsaveLocation = (user_id, location_id, success) => {
  $.ajax({
    method: "DELETE",
    url: `api/locations/1`,
    dataType: "json",
    data: { user_id, location_id },
    success
  });
};
