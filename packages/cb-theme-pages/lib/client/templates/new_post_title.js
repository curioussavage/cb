Template[getTemplate('newPostTitle')].helpers({
  postLink: function(){
    return !!this.url ? getOutgoingUrl(this.url) : "/posts/"+this._id;
  },
  postTarget: function() {
    return !!this.url ? '_blank' : '';
  },
  formattedHangoutDate: function() {
    if (this.scheduledFor) {
      // Don't bother to show time for past hangouts. Cuz who cares yo.
      return (this.scheduledFor > Date.now()) ? moment(this.scheduledFor).format('MMMM Do YYYY, h:mm a') :
                                                moment(this.scheduledFor).fromNow();
    } else {
      return '';
    }
  },
  notExpiredEvent: function () {
    var notExpired = (this.scheduledFor > Date.now()-86400000) ? true : false;
    /*Not expired as long as it was scheduled for within the last 24 hours*/
    return notExpired;
  }
});
