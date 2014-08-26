describe('getMonth(month)', function() {

  it('Test with expected values; expect raw output.', function() {

    expect(ephemeris.getMonth(1)[0][0]).toEqual("Jour de l'An");
    expect(ephemeris.getMonth(1)).toEqual(ephemeris.source.january);
    expect(ephemeris.getMonth(1).length).toEqual(31);

    expect(ephemeris.getMonth(2)).toEqual(ephemeris.source.february);
    expect(ephemeris.getMonth(2).length).toEqual(29);

    expect(ephemeris.getMonth(3)).toEqual(ephemeris.source.march);
    expect(ephemeris.getMonth(3).length).toEqual(31);

    expect(ephemeris.getMonth(4)).toEqual(ephemeris.source.april);
    expect(ephemeris.getMonth(4).length).toEqual(30);

    expect(ephemeris.getMonth(5)).toEqual(ephemeris.source.may);
    expect(ephemeris.getMonth(5).length).toEqual(31);

    expect(ephemeris.getMonth(6)).toEqual(ephemeris.source.june);
    expect(ephemeris.getMonth(6).length).toEqual(30);

    expect(ephemeris.getMonth(7)).toEqual(ephemeris.source.july);
    expect(ephemeris.getMonth(7).length).toEqual(31);

    expect(ephemeris.getMonth(8)).toEqual(ephemeris.source.august);
    expect(ephemeris.getMonth(8).length).toEqual(31);

    expect(ephemeris.getMonth(9)).toEqual(ephemeris.source.september);
    expect(ephemeris.getMonth(9).length).toEqual(30);

    expect(ephemeris.getMonth(10)).toEqual(ephemeris.source.october);
    expect(ephemeris.getMonth(10).length).toEqual(31);

    expect(ephemeris.getMonth(11)[0][0]).toEqual("Toussaint");
    expect(ephemeris.getMonth(11)).toEqual(ephemeris.source.november);
    expect(ephemeris.getMonth(11).length).toEqual(30);

    expect(ephemeris.getMonth(12)[24][0]).toEqual("Noël");
    expect(ephemeris.getMonth(12)).toEqual(ephemeris.source.december);
    expect(ephemeris.getMonth(12).length).toEqual(31);
  });

  it('Test with string values; expect undefined.', function() {
    expect(ephemeris.getMonth('1')).toEqual(undefined);
    expect(ephemeris.getMonth('12')).toEqual(undefined);
  });

  it('Test with outbound values; expect undefined.', function() {
    expect(ephemeris.getMonth(0)).toEqual(undefined);
    expect(ephemeris.getMonth(13)).toEqual(undefined);
  });

  it('Test with outbound string values; expect undefined.', function() {
    expect(ephemeris.getMonth('0')).toEqual(undefined);
    expect(ephemeris.getMonth('13')).toEqual(undefined);
  });

  it('Test with undexpected values; expect undefined.', function() {
    expect(ephemeris.getMonth(undefined)).toEqual(undefined);
    expect(ephemeris.getMonth(null)).toEqual(undefined);
    expect(ephemeris.getMonth()).toEqual(undefined);
    expect(ephemeris.getMonth({})).toEqual(undefined);
  });
});


describe('getEphemerisName(day, month)', function() {

  it('Test with expected values; expect proper output.', function() {
    expect(ephemeris.getEphemerisName(1, 1)).toEqual("Jour de l'An");
    expect(ephemeris.getEphemerisName(25, 12)).toEqual('Noël');
    expect(ephemeris.getEphemerisName(1, 11)).toEqual('Toussaint');
  });

  it('Test with string values; expect undefined.', function() {
    expect(ephemeris.getEphemerisName('1', '1')).toEqual(undefined);
    expect(ephemeris.getEphemerisName('25', '12')).toEqual(undefined);
    expect(ephemeris.getEphemerisName('1', '11')).toEqual(undefined);
  });

  it('Test with outbound values; expect undefined.', function() {
    expect(ephemeris.getEphemerisName(0, 1)).toEqual(undefined);
    expect(ephemeris.getEphemerisName(32, 1)).toEqual(undefined);

    expect(ephemeris.getEphemerisName(1, 0)).toEqual(undefined);
    expect(ephemeris.getEphemerisName(1, 13)).toEqual(undefined);

    expect(ephemeris.getEphemerisName(0, 0)).toEqual(undefined);
    expect(ephemeris.getEphemerisName(0, 13)).toEqual(undefined);
  });

  it('Test with outbound string values; expect undefined.', function() {
    expect(ephemeris.getEphemerisName('0', '1')).toEqual(undefined);
    expect(ephemeris.getEphemerisName('32', '1')).toEqual(undefined);

    expect(ephemeris.getEphemerisName('1', '0')).toEqual(undefined);
    expect(ephemeris.getEphemerisName('1', '13')).toEqual(undefined);

    expect(ephemeris.getEphemerisName('0', '0')).toEqual(undefined);
    expect(ephemeris.getEphemerisName('0', '13')).toEqual(undefined);
  });

  it('Test with undexpected values; expect undefined.', function() {
    expect(ephemeris.getEphemerisName(undefined, undefined)).toEqual(undefined);
    expect(ephemeris.getEphemerisName(undefined, null)).toEqual(undefined);
    expect(ephemeris.getEphemerisName(null, undefined)).toEqual(undefined);
    expect(ephemeris.getEphemerisName(null, null)).toEqual(undefined);

    expect(ephemeris.getEphemerisName(null, {})).toEqual(undefined);
    expect(ephemeris.getEphemerisName({}, null)).toEqual(undefined);
    expect(ephemeris.getEphemerisName({}, {})).toEqual(undefined);

    expect(ephemeris.getEphemerisName(undefined, {})).toEqual(undefined);
    expect(ephemeris.getEphemerisName({}, undefined)).toEqual(undefined);
    expect(ephemeris.getEphemerisName({}, {})).toEqual(undefined);

    expect(ephemeris.getEphemerisName(undefined)).toEqual(undefined);
    expect(ephemeris.getEphemerisName(null)).toEqual(undefined);
    expect(ephemeris.getEphemerisName()).toEqual(undefined);
    expect(ephemeris.getEphemerisName({})).toEqual(undefined);
  });
});


describe('getEphemeris(day, month)', function() {

  it('Test with expected values for days without prefix; expect proper output.', function() {
    expect(ephemeris.getEphemeris(1, 1)).toEqual("Jour de l'An");
    expect(ephemeris.getEphemeris(25, 12)).toEqual('Noël');
    expect(ephemeris.getEphemeris(1, 11)).toEqual('Toussaint');
  });

  it('Test with expected values for days with prefix; expect proper output.', function() {
    expect(ephemeris.getEphemeris(2, 1)).toEqual('Saint Basile');
    expect(ephemeris.getEphemeris(1, 2)).toEqual('Sainte Ella');
  });

  it('Test with string values; expect undefined.', function() {
    expect(ephemeris.getEphemeris('1', '1')).toEqual(undefined);
    expect(ephemeris.getEphemeris('25', '12')).toEqual(undefined);
    expect(ephemeris.getEphemeris('1', '11')).toEqual(undefined);
  });

  it('Test with outbound values; expect undefined.', function() {
    expect(ephemeris.getEphemeris(0, 1)).toEqual(undefined);
    expect(ephemeris.getEphemeris(32, 1)).toEqual(undefined);

    expect(ephemeris.getEphemeris(1, 0)).toEqual(undefined);
    expect(ephemeris.getEphemeris(1, 13)).toEqual(undefined);

    expect(ephemeris.getEphemeris(0, 0)).toEqual(undefined);
    expect(ephemeris.getEphemeris(0, 13)).toEqual(undefined);
  });

  it('Test with outbound string values; expect undefined.', function() {
    expect(ephemeris.getEphemeris('0', '1')).toEqual(undefined);
    expect(ephemeris.getEphemeris('32', '1')).toEqual(undefined);

    expect(ephemeris.getEphemeris('1', '0')).toEqual(undefined);
    expect(ephemeris.getEphemeris('1', '13')).toEqual(undefined);

    expect(ephemeris.getEphemeris('0', '0')).toEqual(undefined);
    expect(ephemeris.getEphemeris('0', '13')).toEqual(undefined);
  });

  it('Test with undexpected values; expect undefined.', function() {
    expect(ephemeris.getEphemeris(undefined, undefined)).toEqual(undefined);
    expect(ephemeris.getEphemeris(undefined, null)).toEqual(undefined);
    expect(ephemeris.getEphemeris(null, undefined)).toEqual(undefined);
    expect(ephemeris.getEphemeris(null, null)).toEqual(undefined);

    expect(ephemeris.getEphemeris(null, {})).toEqual(undefined);
    expect(ephemeris.getEphemeris({}, null)).toEqual(undefined);
    expect(ephemeris.getEphemeris({}, {})).toEqual(undefined);

    expect(ephemeris.getEphemeris(undefined, {})).toEqual(undefined);
    expect(ephemeris.getEphemeris({}, undefined)).toEqual(undefined);
    expect(ephemeris.getEphemeris({}, {})).toEqual(undefined);

    expect(ephemeris.getEphemeris(undefined)).toEqual(undefined);
    expect(ephemeris.getEphemeris(null)).toEqual(undefined);
    expect(ephemeris.getEphemeris()).toEqual(undefined);
    expect(ephemeris.getEphemeris({})).toEqual(undefined);
  });
});


describe('getTodayEphemeris()', function() {

  it('Test with expected values for days without prefix; expect proper output.', function() {
    expect(ephemeris.getTodayEphemeris()).not.toEqual(undefined);
  });

});


describe('getTodayEphemerisName()', function() {

  it('Test with expected values for days without prefix; expect proper output.', function() {
    expect(ephemeris.getTodayEphemerisName()).not.toEqual(undefined);
  });

});