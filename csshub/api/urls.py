from django.urls import path
from . import views

urlpatterns = [
    # path('event-create/', views.EventPostCreate.as_view(), name='eventpost-view-create'),  #post
    # path('event-get/', views.EventRetrieveData.as_view(), name='eventpost-view-retrieve'),      #getAll
    # path('event-update/<int:id>/', views.EventUpdate.as_view(), name='eventpost-view-update') #update

    #admin endpoints
    path('get-events/', views.get_events, name='get-events'),
    path('create-event/', views.create_event, name='create-events'),
    path('edit-event/<int:event_id>/', views.edit_event, name='edit-event'),  # PATCH or PUT for editing an event
    path('delete-event/<int:event_id>/', views.delete_event, name='delete-event'),
]