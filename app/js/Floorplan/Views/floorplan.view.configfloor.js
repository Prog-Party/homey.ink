document.addEventListener('onActivateFloor', function(e) {
    $('#configfloor_name').val(_floors.activeFloor.name)
    $('#configfloor_order').val(_floors.activeFloor.order)
    $('#configfloor_image').val(_floors.activeFloor.img)
    $('#configfloor_image_plot').attr('src', _floors.activeFloor.img)
}, false)

window.addEventListener('resize', function(e) {
    renderDevicesToFloorplan()
})

document.addEventListener('onFloorsRetrieved', function(e) {
    removeLoader('configfloor_AddFloorLoader')
    removeLoader('configfloor_UpdateFloorLoader')
    removeLoader('configfloor_DeleteFloorLoader')

    if (_floors.allFloors.length == 0) {
        $('#configfloor_UpdateFloor').hide()
        $('#configfloor_DeleteFloor').hide()
    } else {
        _floors.activateFloor(_floors.allFloors[0].id)
        $('#configfloor_UpdateFloor').show()
        $('#configfloor_DeleteFloor').show()
    }
}, false)

$(document).on('click', '#configfloor_AddFloor', function() {
    _floors.addFloor($('#configfloor_name').val(), $('#configfloor_order').val(), $('#configfloor_image').val())

    if (_floors.allFloors.length > 0) {
        $('#configfloor_UpdateFloor').show()
        $('#configfloor_DeleteFloor').show()
    }
})

$(document).on('click', '#configfloor_UpdateFloor', function() {
    _floors.updateFloor(_floors.activeFloor.id, $('#configfloor_name').val(), $('#configfloor_order').val(), $('#configfloor_image').val())
})

$(document).on('click', '#configfloor_DeleteFloor', function() {
    _floors.deleteFloor(_floors.activeFloor.id)

    $('#configfloor_name').val('')
    $('#configfloor_order').val('')
    $('#configfloor_image').val('')
    $('#configfloor_image_plot').attr('src', '')
})
