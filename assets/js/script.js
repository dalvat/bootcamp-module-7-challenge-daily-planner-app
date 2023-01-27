let timeBlocksContainer = $('#time-block');
let currentDay = $('#current-day');

let workingHours = [9, 10, 11, 12, 13, 14, 15, 16, 17];

function init() {
  createTimeBlocks();
  showTime();
  newDayCheck();
  console.log(newDayCheck());
  if (newDayCheck() === false) {
    populateTasks();
  };
};

init()

function createTimeBlocks() {
  workingHours.forEach(function(i) {
    let timeBlock = $('<div>');
    let timeBlockTime = $('<div>');
    let timeBlockHour = $('<p>');
    let timeStop = $('<p>');
    let timeDash = $('<p>');
    let timeBlockTaskDiv = $('<div>');
    let timeBlockTask = $('<input>')
    let timeBlockSave = $('<button>');
    timeBlock.addClass('timeBlock d-flex');
    timeBlockTime.addClass('timeBlockTime d-flex-column align-middle');
    timeBlockTaskDiv.addClass('timeBlockTaskDiv');
    timeBlockTask.addClass('timeBlockTask');
    timeBlockSave.addClass('saveBtn timeBlockSave');
    timeBlockHour.addClass('timeBlockHour');
    timeBlock.attr('time-stamp', i);
    timeBlockTask.attr('id', 'task-' + i + '-input');
    timeBlockTask.attr('placeholder', 'Add event');
    timeBlockSave.attr('id', 'task-' + i + '-save');
    if(i === 8 || i === 9) {
      timeBlockHour.text('0' + i + ':00')
    } else {
      timeBlockHour.text(i + ':00');
    }
    timeBlockSave.text('\uD83D\uDCBE');
    timeBlocksContainer.append(timeBlock);
    timeBlock.append(timeBlockTime);
    timeBlockTime.append(timeBlockHour);
    timeBlockTime.append(timeDash);
    timeBlockTime.append(timeStop);
    timeBlock.append(timeBlockTaskDiv);
    timeBlockTaskDiv.append(timeBlockTask);
    timeBlock.append(timeBlockSave);
  });
};

let allButtons= $('#time-block').children().children('button')

function showTime() {
  currentDay.text(moment().format('dddd, Do MMMM'))
};

setInterval(function(timeStamp, currentHour) {
  timeStamp = [$('[time-stamp=9]'), $('[time-stamp=10]'), $('[time-stamp=11]'), $('[time-stamp=12]'), $('[time-stamp=13]'), $('[time-stamp=14]'), $('[time-stamp=15]'), $('[time-stamp=16]'), $('[time-stamp=17]')];
  currentHour = moment().format('HH');
  
  for (let i = 0; i < timeStamp.length; i++) {
    if((i + 9) < currentHour) {
      timeStamp[i].addClass('past');
      timeStamp[i].children().eq(1).children().eq(0).attr('disabled', 'disabled');
    } else if ((i + 9) == currentHour) {
      timeStamp[i].addClass('present');
    } else if ((i + 9) > currentHour) {
      timeStamp[i].addClass('future');
    };
  };
}, 30,000);

$('#task-9-save').on('click', function(task) {
  task = $('#task-9-input').val();
  localStorage.setItem('task-9', task);
});

$('#task-10-save').on('click', function(task) {
  task = $('#task-10-input').val();
  localStorage.setItem('task-10', task);
});

$('#task-11-save').on('click', function(task) {
  task = $('#task-11-input').val();
  localStorage.setItem('task-11', task);
});

$('#task-12-save').on('click', function(task) {
  task = $('#task-12-input').val();
  localStorage.setItem('task-12', task);
});

$('#task-13-save').on('click', function(task) {
  task = $('#task-13-input').val();
  localStorage.setItem('task-13', task);
});

$('#task-14-save').on('click', function(task) {
  task = $('#task-14-input').val();
  localStorage.setItem('task-14', task);
});

$('#task-15-save').on('click', function(task) {
  task = $('#task-15-input').val();
  localStorage.setItem('task-15', task);
});

$('#task-16-save').on('click', function(task) {
  task = $('#task-16-input').val();
  localStorage.setItem('task-16', task);
});

$('#task-17-save').on('click', function(task) {
  task = $('#task-17-input').val();
  localStorage.setItem('task-17', task);
});

allButtons.on('click', function(date) {
  date = moment().format('DD');
  localStorage.setItem('last-save', date);
});


function newDayCheck(dateNow, lastSave, dateCheck) {
  dateNow = moment().format('DD')
  lastSave = localStorage.getItem('last-save');
  dateCheck = false;
  if(dateNow > lastSave) {
    dateCheck = true;
    localStorage.removeItem('task-9');
    localStorage.removeItem('task-10');
    localStorage.removeItem('task-11');
    localStorage.removeItem('task-12');
    localStorage.removeItem('task-13');
    localStorage.removeItem('task-14');
    localStorage.removeItem('task-15');
    localStorage.removeItem('task-16');
    localStorage.removeItem('task-17');
  };
  return dateCheck
};

function populateTasks() {
  let task9 = localStorage.getItem('task-9');
  if (task9 !== null) {
    $('#task-9-input').val(task9);
  };
  let task10 = localStorage.getItem('task-10');
  if (task10 !== null) {
    $('#task-10-input').val(task10);
  };
  let task11 = localStorage.getItem('task-11');
  if (task11 !== null) {
    $('#task-11-input').val(task11);
  };
  let task12 = localStorage.getItem('task-12');
  if (task12 !== null) {
    $('#task-12-input').val(task12);
  };
  let task13 = localStorage.getItem('task-13');
  if (task13 !== null) {
    $('#task-13-input').val(task13);
  };
  let task14 = localStorage.getItem('task-14');
  if (task14 !== null) {
    $('#task-14-input').val(task14);
  };
  let task15 = localStorage.getItem('task-15');
  if (task15 !== null) {
    $('#task-15-input').val(task15);
  };
  let task16 = localStorage.getItem('task-16');
  if (task16 !== null) {
    $('#task-16-input').val(task16);
  };
  let task17 = localStorage.getItem('task-17');
  if (task17 !== null) {
    $('#task-17-input').val(task17);
  };
};