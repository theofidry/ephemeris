describe('getMonth(month)', function() {

    it('Test with expected values; expect raw output.', function() {

        expect(getMonth(1)[0][0]).toEqual("Jour de l'An");
        expect(getMonth(1)).toEqual(source.january);
        expect(getMonth(1).length).toEqual(31);
        
        expect(getMonth(2)).toEqual(source.february);
        expect(getMonth(2).length).toEqual(29);

        expect(getMonth(3)).toEqual(source.march);
        expect(getMonth(3).length).toEqual(31);

        expect(getMonth(4)).toEqual(source.april);
        expect(getMonth(4).length).toEqual(30);

        expect(getMonth(5)).toEqual(source.may);
        expect(getMonth(5).length).toEqual(31);

        expect(getMonth(6)).toEqual(source.june);
        expect(getMonth(6).length).toEqual(30);

        expect(getMonth(7)).toEqual(source.july);
        expect(getMonth(7).length).toEqual(31);

        expect(getMonth(8)).toEqual(source.august);
        expect(getMonth(8).length).toEqual(31);

        expect(getMonth(9)).toEqual(source.september);
        expect(getMonth(9).length).toEqual(30);

        expect(getMonth(10)).toEqual(source.october);
        expect(getMonth(10).length).toEqual(31);

        expect(getMonth(11)[0][0]).toEqual("Toussaint");
        expect(getMonth(11)).toEqual(source.november);
        expect(getMonth(11).length).toEqual(30);

        expect(getMonth(12)[24][0]).toEqual("Noël");
        expect(getMonth(12)).toEqual(source.december);
        expect(getMonth(12).length).toEqual(31);
    });

    it('Test with string values; expect undefined.', function() {
        expect(getMonth('1')).toEqual(undefined);
        expect(getMonth('12')).toEqual(undefined);
    });

    it('Test with outbound values; expect undefined.', function() {
        expect(getMonth(0)).toEqual(undefined);
        expect(getMonth(13)).toEqual(undefined);
    });

    it('Test with outbound string values; expect undefined.', function() {
        expect(getMonth('0')).toEqual(undefined);
        expect(getMonth('13')).toEqual(undefined);
    });

    it('Test with undexpected values; expect undefined.', function() {
        expect(getMonth(undefined)).toEqual(undefined);
        expect(getMonth(null)).toEqual(undefined);
        expect(getMonth()).toEqual(undefined);
    });
});


describe('getEphemerisName(day, month)', function() {

    it('Test with expected values; expect proper output.', function() {
        expect(getEphemerisName(1, 1)).toEqual("Jour de l'An");
        expect(getEphemerisName(25, 12)).toEqual('Noël');
        expect(getEphemerisName(1, 11)).toEqual('Toussaint');
    });

    it('Test with string values; expect undefined', function() {
        expect(getEphemerisName('1', '1')).toEqual(undefined);
        expect(getEphemerisName('25', '12')).toEqual(undefined);
        expect(getEphemerisName('1', '11')).toEqual(undefined);
    });

    // it('Test with outbound values.', function() {
    //     expect(getMonth(0)).toEqual(undefined);
    //     expect(getMonth(13)).toEqual(undefined);
    // });

    // it('Test with outbound string values.', function() {
    //     expect(getMonth('0')).toEqual(undefined);
    //     expect(getMonth('13')).toEqual(undefined);
    // });

    // it('Test with undexpected values.', function() {
    //     expect(getMonth(undefined)).toEqual(undefined);
    //     expect(getMonth(null)).toEqual(undefined);
    //     expect(getMonth()).toEqual(undefined);
    // });
});